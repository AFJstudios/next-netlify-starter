import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id='main-home' className={utilStyles.headingMd}>
        <p>Welcome to the world of Adrian Faz Jr! A place where Christian faith, lifestyle, and web development come together to create a unique blend of inspiration and creativity. As you journey through the pages of this blog, you'll get a glimpse into the life of Adrian Faz Jr, a devoted Christian, web developer, and problem solver.</p>

        <p>Based in Mexico, Adrian is a 28-year-old engineer with a passion for system administration and all things related to web development. But his interests don't stop there - Adrian is also an avid basketball player, a loving husband to his beautiful wife Karla Maldonado, and a dedicated individual who seeks to make a positive impact in the world through his work and his faith.</p>

        <p>With a heart deeply rooted in his Christian beliefs, Adrian's blog is a reflection of his journey as he navigates the challenges and joys of life, while also pursuing his passion for web development. From insightful posts about his personal experiences to thought-provoking reflections on faith, Adrian shares his unique perspective on how his Christian faith influences his lifestyle and his work in the field of web development.</p>

        <p>As a problem solver by nature, Adrian brings a unique approach to his web development projects, combining his technical expertise with his creative flair to create innovative solutions. His blog serves as a platform to share his insights, tips, and tricks on web development, as well as to engage with fellow developers and share ideas.</p>

        <p>But Adrian's blog is not just about technical expertise - it's also about his personal journey as a husband, a friend, and a member of his community. He shares his adventures, struggles, and triumphs, offering readers a glimpse into the life of a young Christian professional navigating the complexities of modern life.</p>

        <p>So whether you're interested in web development, Christian faith, lifestyle, or simply enjoy getting to know the person behind the blog, Adrian Faz Jr.'s website is the place to be. Join him on this exciting journey as he seeks to inspire, create, and make a difference through his passions and his faith. Welcome to Adrian Faz Jr.'s blog - a place where faith, lifestyle, and web development converge.</p>
      </section>
      <section id='blog-list' className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Recent Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}