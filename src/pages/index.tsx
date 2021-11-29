import {useState} from 'react';
import {GetStaticProps} from 'next';
import BasePageLayout from 'src/layout/basePageLayout/BasePageLayout';
import Link from 'next/link'
import Date from '#components/example/date/Date'
import {getSortedPostsData} from '../lib/examplePosts';
import Button from 'src/components/common/button/Button';
import PageSection from "../layout/pageSection/PageSection";
import Typography from "#components/common/typography/Typography";

interface HomeProps {
    allPostsData: {
        date: string
        title: string
        id: string
    }[]
}

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const Home = ({allPostsData}: HomeProps) => {

// example fetching data
    const [value, setValue] = useState({title: 'waiting for data'});

    const fetchData = async event => {
        const response = await fetch('/api/hello');
        setValue(await response.json())
    }
    // end example fetching data
    return (
        <BasePageLayout home>
            <PageSection>
                <Typography
                    variant='h2' text={value.title}
                />
                <ul>
                    {allPostsData.map(({id, date, title}) => (
                        <li className='listItem' key={id}>
                            <Link href={`/examplePosts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <Date dateString={date}/>
                        </li>
                    ))}
                </ul>
                <Button
                    onClick={fetchData}
                    text="Get data"
                />
            </PageSection>
        </BasePageLayout>
    )
}

export default Home;
