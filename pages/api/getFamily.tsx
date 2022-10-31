import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Family } from '../../typings';

const query = groq`
    *[_type == "family"]
`

type Data={
    family : Family[]
}

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const family: Family[] = await sanityClient.fetch(query);
    
    res.status(200).json({ family })
}
