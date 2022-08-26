// 'Sorry, there are no images matching your search query. Please try again.';
import axios from 'axios';
import Notiflix from 'notiflix';

// const fetchPhoto = searchName => {
//   return fetch(
//     `https://restcountries.com/v3.1/name/${searchName}?fields=,name,capital,population,flags,languages`
//   )
//     .then(response => {
//       if (!response.ok) {
//         if (response.status === 404) {
//           return [];
//         }
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };

const URL =
  'https://pixabay.com/api/?key=29528567-7e538c7cf33df2404e5c0ef32&q=${photoSerch}&image_type=photo';
async function getPhoto() {
  try {
    const response = await axios.get(URL);
    console.log(response);
  } catch (error) {
    console.error(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  }
}
