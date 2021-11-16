# Next.js with Typescript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`]

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Why?

- SSG and SSR
- SEO
- Improves performance as information are pre-loaded

## Folder Structure

node-modules: dependencies  
pages: different pages/routes, next will auto create route for different files (for contect.js, /contact route will be created)  
public: assets used in the site , use /file-name to use anywhere
styles: styling with css

## Pages/Components/Routes

pages/about.tsx or pages/about.js will create /about route and for pages/index.tsx, / route will be created.

```ts
// Define a route
// this will be available in url/about
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};

export default About;
```

pages/folder/test.tsx will create /folder/test route and for pages/folder/index.tsx, /folder route will be created.

Create reusable components. Define a folder in root directory called components and place components in there and import them to use.

```ts
// Reusable component
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Coders List</h1>
      </div>
      <a>Home</a>
      <a>About</a>
      <a>Coder Listing</a>
    </nav>
  );
};

export default Navbar;
```

```ts
// Using the component
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
```

## Linking between pages

```ts
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/coders">
      <a>See Ninja Listing</a>
    </Link>
  );
}
```

Nextjs fetches the js file needed only once and use it throughout the site.

## Layouts

Create layout files just like components.

```ts
// Layout
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
```

In pages/\_app.tsx

```ts
// Defining the layout here, so that every pages will be surrounded by Layout(i.e. Navbar and Footer)
import "../styles/globals.css"; // every page will have this style
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

## Styling

In styles/globals.css, we define css that will be applied to every page cause it is already imported in pages/\_app.tsx, from where every page is created.

For module specific css, styles/Home.module.css will apply to only Home function/component/Jsx.element. And there will no class name clashes.

```ts
// Import to use
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}> // use container class whose style is defined in Home.module.css, class will be changed to Home_container_randomChars to make it unique in both html and css
    </div>
    ...
  );
}
```

Home.module.css

```css
/* All should be class selector */
.container {
  background-color: black;
}
```

## 404 page | Auto-redirect

Nextjs has its default 404 page but we can create our custom 404 page.
Create pages/404.tsx and start adding some data.

```ts
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.back;
      router.push("/"); // redirect to base url
    }, 3000); // wait for 3s
  }, []); // run when NotFound is mounted on the screen, [] means run only once

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
```

## Image | Head

Using Image instead of img tag so that the image will only load if its visible on the screen.
```ts
// <img src="/logo.png" alt="logo" />
import Image from "next/image";

// Use Image instead of img
<Image src="/logo.png" width={50} height={50} />
```

All the meta-data and title can be defined using Head component.
```ts
import Head from "next/head";

export default function Home() {
  return (
    <> // using empty tag to wrap everything cause, we can only return only on tag
      <Head>
        <title>Coder's List | Home</title>
        <meta name="description" content="List of Coders" />
      </Head>
      <div></div>
    </>
  );
}
```

## fetching data | getStaticProps

```ts
// getStaticProps runs at first
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { coders: data }, // return fetched data as props
  };
};

// receive props in here
const Coders = ({ coders }) => {
  return (
    <div>
      <h1>Coders</h1>
      {coders.map((coder) => (
        <div key={coder.id}> // key is needed in maps
          <a>
            <h3>{coder.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Coders;
```