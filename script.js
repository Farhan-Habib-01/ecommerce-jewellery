    document.addEventListener('DOMContentLoaded', function(){
      // add a tiny interactive effect (wishlist click)
      document.querySelectorAll('.wishlist-icon').forEach(el => {
        el.addEventListener('click', function(e){
          e.stopPropagation();
          const icon = this.querySelector('i');
          icon.classList.toggle('far');
          icon.classList.toggle('fas');
          if(icon.classList.contains('fas')) {
            icon.style.color = '#D8B36A';
          } else {
            icon.style.color = '#6E6E6E';
          }
        });
      });
    });