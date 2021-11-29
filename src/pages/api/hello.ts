import { NextApiRequest, NextApiResponse } from 'next'
import data from '../../mock/mockData.json';

export default (_: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(data)
}
