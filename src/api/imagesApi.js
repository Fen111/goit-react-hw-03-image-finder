import axios from 'axios';

const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '23914400-19c57926caa45a402450638cc',
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export default async function fetchImage(q = '', page = 1, per_page = 12) {
  try {
    const { data } = await getImages('', { params: { q, page, per_page } });

    return data.hits;
  } catch (error) {
    console.error(`Image ${q} not found`);
  }
}
