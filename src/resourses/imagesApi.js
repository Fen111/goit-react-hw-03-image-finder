import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '23914400-19c57926caa45a402450638cc';

export default async function fetchImage(searchImage, currentPage) {
  let category = `${searchImage}`;
  let page = currentPage;
  let perPage = 12;

  let url =
    BASE_URL +
    `?q=${category}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  const res = await axios.get(url);
  const data = await res.data;
  const galleryImg = await data.hits;
  if (galleryImg.length === 0) {
    console.log('Image not found');
  }
  return galleryImg;
}
