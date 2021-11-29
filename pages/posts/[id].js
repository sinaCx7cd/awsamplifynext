import Layout from '../../components/layout'
import { getPostData } from '../../lib/constposts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.id}</title>
        <meta name="description" content={postData.id}></meta>
      </Head>
      <article>
        <h1 >{postData.id}</h1>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    },
    revalidate: 10
  }
}
