// Your JS code here.
<script>
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const slideInImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  slideInImages.forEach(slideInImage => {
    const slideInAt = (window.scrollY + window.innerHeight) - slideInImage.height / 2;
    const imageBottom = slideInImage.offsetTop + slideInImage.height;
    const isHalfShown = slideInAt > slideInImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      slideInImage.classList.add('active');
    } else {
      slideInImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
</script>

