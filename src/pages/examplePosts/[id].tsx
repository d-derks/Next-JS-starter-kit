import BasePageLayout from '../../layout/basePageLayout/BasePageLayout';
import Date from '#components/example/date/Date'
import { getAllPostIds, getPostData } from '../../lib/examplePosts'
import Typography from "#components/common/typography/Typography";
import { GetStaticProps, GetStaticPaths } from 'next'

// dynamic example page


export default function Post({
    postData
    }: {
        postData: {
            title: string
            date: string
            contentHtml: string

    } }) {
    return (
        <BasePageLayout
            metaTitle={postData.title}
        >
            <article>
                <Typography text={postData.title} variant="h1" />
                <Date dateString={postData.date} />
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </BasePageLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string)
    return {
        props: {
            postData
        }
    }
}
