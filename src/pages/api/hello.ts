import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../mock/mockData.json';

const fetchData = (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(data)
}

export default fetchData;
