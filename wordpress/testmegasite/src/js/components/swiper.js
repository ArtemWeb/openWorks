import Swiper from 'swiper';
import { Pagination} from 'swiper/modules';

export function initSwiper() {
  const partners = new Swiper('.customers-slider', {
    slidesPerView: 1,
    // slidesPerGroup: 1,
    // spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    modules: [Pagination],
  });
}
