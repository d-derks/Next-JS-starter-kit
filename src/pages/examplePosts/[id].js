import BasePageLayout from '../../layout/basePageLayout/BasePageLayout';
import Date from '#components/example/date/Date'
import { getAllPostIds, getPostData } from '../../lib/examplePosts'
import Typography from "#components/common/typography/Typography";

// dynamic example page

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
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
