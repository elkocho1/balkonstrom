
(function () {
  const mountingOptionsInputs = document.querySelectorAll(
    ".input-mounting__options"
  );
  if (mountingOptionsInputs.length) {
    mountingOptionsInputs.forEach((input) =>
      input.addEventListener(
        "change",
        handleMountingInputChange.bind(this),
        true
      )
    );
  }

  function handleMountingInputChange(event) {
    const target = event.currentTarget;
    const value = target.value;
    const optionPosition = target.getAttribute("data-option-position");
    const optionWrapper = document.querySelector(
      `.variant-picker__option[data-option-index='${optionPosition}']`
    );
    const optionButton = optionWrapper.querySelector(
      `[data-option-selector] button[value='${value}']`
    );
    if (optionButton) {
      optionButton.click();
    }
    console.log(optionButton);
    if (document.querySelectorAll(".form-control").length > 0) {
      document.querySelectorAll(".form-control").forEach((form) => {
        const formInput = form.querySelector("input:checked");
        if (formInput) {
          form.click();
        }
      });
    }
  }
})();

const featuredCollectionlist = document.querySelectorAll(
  ".__featured_collection_scrolling"
);
for (var i = 0; i < featuredCollectionlist.length; i++) {
  featuredCollectionlist[i].setAttribute("id", "featured_collection_" + i);
}

var scrollLinks = document.querySelectorAll(".collection__nav__item a");
function smoothScrollAndRedirect(e) {
  e.preventDefault();

  var targetUrl = this.getAttribute("href");
  var targetId = targetUrl.substring(targetUrl.indexOf("#"));
  var targetElement = document.querySelector(targetId);
  window.location.href = targetUrl;
  if (targetElement) {
    setTimeout(function () {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }
}
scrollLinks.forEach(function (link) {
  link.addEventListener("click", smoothScrollAndRedirect);
});



setTimeout(() => {
  const klarna_popup = document.querySelector("#klarna_popup");
  if (klarna_popup) {
    klarna_popup.addEventListener("click", () => {
      const InnerPopup = document.querySelector(".product_popup");
      document.body.classList.add("klarna-overflow");
      InnerPopup.classList.add("show");
      InnerPopup.style.display = "";
      InnerPopup.querySelector(".closepopup").addEventListener("click", () => {
        document.body.classList.remove("klarna-overflow");
        InnerPopup.style.display = "none";
        InnerPopup.classList.remove("show");
      });
      InnerPopup.querySelector(".button").addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("klarna-overflow");
        InnerPopup.style.display = "none";
        InnerPopup.classList.remove("show");
      });
    });
  }
}, 500);


document.addEventListener("DOMContentLoaded", function () {
  function handleAccordionClick() {
    var description = this.nextElementSibling;
    if (description.style.height === "0px" || description.style.height === "") {
      description.style.height = description.scrollHeight + "px";
      this.classList.add("activeButton");
    } else {
      description.style.height = "0px";
      this.classList.remove("activeButton");
    }
  }

  function handleResize() {
    if (window.innerWidth <= 749) {
      var headings = document.querySelectorAll(
        ".seo-section .accordion_heading"
      );
      headings.forEach(function (heading) {
        heading.removeEventListener("click", handleAccordionClick);
        heading.addEventListener("click", handleAccordionClick);
      });
    } else {
      var headings = document.querySelectorAll(
        ".seo-section .accordion_heading"
      );
      headings.forEach(function (heading) {
        heading.removeEventListener("click", handleAccordionClick);
      });
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});

(function () {
  "use strict";

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
})();

const accordionItemHeaders = document.querySelectorAll(
  ".footer .footer__block--menu .footer-menu-heading"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeaders.forEach((item) => {
      if (item !== accordionItemHeader) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = 0;
      }
    });

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

document
  .querySelectorAll(".custom-main-article .article-content-wrap .prose h3")
  .forEach(function (element) {
    let text = element.textContent;
    let transformedText = text
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/\s+/g, "-");
    element.id = transformedText;
    element.setAttribute("data-located", transformedText); // Added data-located attribute for matching
  });

function setupNavigationScroll() {
  const AllArticleLi = document.querySelectorAll(".article-navigation-left li");
  AllArticleLi.forEach((li) => {
    li.addEventListener("click", () => {
      const LiAttr = li.querySelector("a").getAttribute("data-href");
      const LocatedAttr = document.querySelectorAll("[data-located]");
      AllArticleLi.forEach((currentLi) => {
        currentLi.classList.remove("active");
      });
      li.classList.add("active");
      LocatedAttr.forEach((attr) => {
        const located_href = attr.getAttribute("id");
        // console.log("attr: ", located_href);
        // console.log("LiAttr: ", LiAttr);
        if (located_href == LiAttr) {
          var element = document.getElementById(`${located_href}`);
          var offsetTop = element.offsetTop - 100;
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  setupNavigationScroll();
});

setTimeout(function () {
  setupNavigationScroll();
}, 1000);

jQuery(document).ready(function () {
  if(jQuery("#slider-for")){
    jQuery("#slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
    });
   } 
  });
  jQuery(document).ready(function () {
   if(jQuery(".collection_list_slider")){ 
    jQuery(".collection_list_slider").slick({
        slidesToShow: 3,
        autoSlidesToShow: true,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: false,
        responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1
          }
        }
      ]
     });
    } 
  });

// js/common/utilities/format-money.js
function formatMoney(cents, format = "") {
  if (typeof cents === "string") {
    cents = cents.replace(".", "");
  }
  const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/, formatString = format || window.themeVariables.settings.moneyFormat;
  function defaultTo(value2, defaultValue) {
    return value2 == null || value2 !== value2 ? defaultValue : value2;
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultTo(precision, 2);
    thousands = defaultTo(thousands, ",");
    decimal = defaultTo(decimal, ".");
    if (isNaN(number) || number == null) {
      return 0;
    }
    number = (number / 100).toFixed(precision);
    let parts = number.split("."), dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + thousands), centsAmount = parts[1] ? decimal + parts[1] : "";
    return dollarsAmount + centsAmount;
  }
  let value = "";
  switch (formatString.match(placeholderRegex)[1]) {
    case "amount":
      value = formatWithDelimiters(cents, 2);
      break;
    case "amount_no_decimals":
      value = formatWithDelimiters(cents, 0);
      break;
    case "amount_with_space_separator":
      value = formatWithDelimiters(cents, 2, " ", ".");
      break;
    case "amount_with_comma_separator":
      value = formatWithDelimiters(cents, 2, ".", ",");
      break;
    case "amount_with_apostrophe_separator":
      value = formatWithDelimiters(cents, 2, "'", ".");
      break;
    case "amount_no_decimals_with_comma_separator":
      value = formatWithDelimiters(cents, 0, ".", ",");
      break;
    case "amount_no_decimals_with_space_separator":
      value = formatWithDelimiters(cents, 0, " ");
      break;
    case "amount_no_decimals_with_apostrophe_separator":
      value = formatWithDelimiters(cents, 0, "'");
      break;
  }
  if (formatString.indexOf("with_comma_separator") !== -1) {
    return formatString.replace(placeholderRegex, value);
  } else {
    return formatString.replace(placeholderRegex, value);
  }
}


// Add upsell product to the cart on new PDP template.
const mainProductContainer = document.querySelectorAll('.product_container_main');
if (mainProductContainer.length > 0) {
  mainProductContainer.forEach(container => {
    const toggleIcon = container.querySelector('.product-image-container');
    if (toggleIcon) {
      toggleIcon.addEventListener('click', () => {
          const productWrapper = container.closest(".product");
          const price_with_product_list = productWrapper?.querySelector('.product-list-with-price')?.classList.toggle('active');
          container.classList.toggle('active');
          const productForm = productWrapper.querySelector(".shopify-product-form");
          // const variantId = container.querySelector('[data-additional-product] [data-variant-id]').getAttribute("data-variant-id");
          if(productWrapper && productForm) {
            productForm.toggleAttribute("data-additional-product");
          }
      });
      toggleIcon.addEventListener('click', AdditionalUpsellProduct.bind(this), true);
    }
  });
}
function AdditionalUpsellProduct(event){
  setTimeout(()=>{    
    var _this = event.target;
    const closestProductInfo = _this?.closest('.product-info');
    const product_container_main = closestProductInfo?.querySelector('.product_container_main');
    const AdditionalProductData = product_container_main?.querySelector('[data-additional-product]')?.querySelector('span');
    const productInfoPrice = closestProductInfo?.querySelector('.product-info__price');
    const comparePrice = productInfoPrice?.querySelector('compare-at-price');
    const regPrice = productInfoPrice?.querySelector('sale-price');
    const productInfoBadge = productInfoPrice?.querySelector('.product-info__badge-list')?.querySelector('on-sale-badge');
    if(product_container_main.classList.contains('active')){    
      comparePrice.innerHTML = `<span class="sr-only">Regulärer Preis</span> ${AdditionalProductData?.getAttribute('data-additional-product-compare-price')}`;
      regPrice.innerHTML = `<span class="sr-only">Angebot</span> ${AdditionalProductData?.getAttribute('data-additional-product-regular-price')}`;
      productInfoBadge.innerHTML = `Sonst ${AdditionalProductData?.getAttribute('data-additional_product-saving-price')} teurer`;
    } else{
      comparePrice.innerHTML = `<span class="sr-only">Regulärer Preis</span> ${AdditionalProductData?.getAttribute('data-main-product-compare-price')}`;
      regPrice.innerHTML = `<span class="sr-only">Angebot</span> ${AdditionalProductData?.getAttribute('data-main-product-regular-price')}`; 
      productInfoBadge.innerHTML = `Sonst ${AdditionalProductData?.getAttribute('data-saving-price')} teurer`
    }
  }, 100);
}
document.addEventListener('variant:change',(evt)=>{
  var currencyFormat = window.themeVariables.settings.currencyCodeEnabled ? window.themeVariables.settings.moneyWithCurrencyFormat : window.themeVariables.settings.moneyFormat;
  const _this = evt.target;
  const prod_info = _this?.closest('.product-info');
  const product_container_main = prod_info?.querySelector('.product_container_main');
  const additional_pro_data = product_container_main?.querySelector('[data-additional-product]')?.querySelector('span');
  const add_pro_c_price = Number(additional_pro_data?.getAttribute('data-only-add-pro-comp-price'));
  const add_pro_price = Number(additional_pro_data.getAttribute('data-only-add-pro-price'));
  const add_final_c_price = add_pro_c_price + evt.detail.variant['compare_at_price'];
  const add_final_price = add_pro_c_price + evt.detail.variant['price'];  
  const saving_price = add_final_c_price - add_final_price;
  additional_pro_data.setAttribute('data-additional-product-compare-price', formatMoney(add_final_c_price, currencyFormat));
  additional_pro_data.setAttribute('data-additional-product-regular-price', formatMoney(add_final_price, currencyFormat));
  additional_pro_data.setAttribute('data-additional_product-saving-price', formatMoney(saving_price, currencyFormat));
  additional_pro_data.setAttribute('data-main-product-compare-price', formatMoney(evt.detail.variant['compare_at_price'], currencyFormat));
  additional_pro_data.setAttribute('data-main-product-regular-price', formatMoney(evt.detail.variant['price'], currencyFormat));
  additional_pro_data.setAttribute('data-saving-price', formatMoney((evt.detail.variant['compare_at_price'] - evt.detail.variant['price']), currencyFormat));
  AdditionalUpsellProduct(evt);
})







document.addEventListener('DOMContentLoaded', function() {
  const readMoreButtons = document.querySelectorAll('.read-more');
  const ArrowIcon = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md text-token-text-primary"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C11.7348 21 11.4804 20.8946 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.5196 20.8946 12.2652 21 12 21Z" fill="currentColor"></path></svg>`

  // Count the number of text rows
  function countTextRows(textElement) {
    const computedStyle = window.getComputedStyle(textElement);
    
    const textHeight = textElement.scrollHeight;
    const lineHeight = parseFloat(computedStyle.lineHeight);
    const numberOfRows = Math.round(textHeight / lineHeight);
    
    return numberOfRows;
  }

  function updateButtonVisibility() {
    readMoreButtons.forEach(button => {
      const content = button.closest('.item').querySelector('.content');
      const rows = countTextRows(content);

	  // Set your count of lines
      rows <= 3 ? 
		  button.classList.add('hidden') : 
	      button.classList.remove('hidden');
    });
  }


  readMoreButtons.forEach(button => {
    const content = button.closest('.item').querySelector('.content');

    button.addEventListener('click', function() {
      content.classList.toggle('expanded');
      
      content.classList.contains('expanded') ? 
        button.innerHTML = ArrowIcon : 
        button.innerHTML = ArrowIcon;
    });
  });

  updateButtonVisibility();

  window.addEventListener('resize', function() {
    updateButtonVisibility();
  });
});







jQuery(document).ready(function () {
  // Check if the screen width is less than or equal to 768px
  if (window.matchMedia("(max-width: 989px)").matches) {
    if(jQuery(".custom_timeline_slider")){
      jQuery(".custom_timeline_slider").slick({
        slidesToShow: 2, // Show one slide on mobile
        slidesToScroll: 1,
        dots: true, // Add dots for mobile navigation
        arrows: false, // No arrows
        infinite: false, // Disable infinite scrolling
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            },
          },
        ],
      });
    }  
  }
});









// window.setGridHeight = (selector) => {
//   const heightArray = [];
//   const offsetArray = [];
//   const sectionArray = [];
//   const diffrentHeights = [];

//   // Gather offset heights and their indices
//   document.querySelectorAll(selector).forEach((grid, i) => {
//     const offsetTop = grid.closest(`[data-equal]`)?.offsetTop || 0;
//     offsetArray.push({ index: i, offsetheight: offsetTop });
//   });

//   // Identify unique heights
//   offsetArray.forEach((e) => {
//     if (!diffrentHeights.includes(e.offsetheight)) {
//       diffrentHeights.push(e.offsetheight);
//     }
//   });

//   // Adjust each group of elements sharing the same offset height
//   diffrentHeights.forEach((height) => {
//     const data = offsetArray.filter(e => e.offsetheight === height);

//     // Gather heights and find max
//     const getAllHeightArray = data.map((ele) => {
//       const element = document.querySelectorAll(selector)[ele.index];
//       element.style.minHeight = "";  // Reset inline styles first
//       return element.offsetHeight;
//     });

//     const maxHeight = Math.max(...getAllHeightArray);

//     // Apply max height to each element in the group
//     data.forEach((ele) => {
//       document.querySelectorAll(selector)[ele.index].style.minHeight = `${maxHeight}px`;
//     });
//   });
// };

// // Run the function with the selector
// window.setGridHeight('.heading_height');



window.setGridHeight = (selector) => {
  const heightArray = [];
  const offsetArray = [];
  const sectionArray = [];
  const differentHeights = [];

  // Gather offset heights and their indices
  document.querySelectorAll(selector).forEach((grid, i) => {
    const offsetTop = grid.closest(`[data-equal]`)?.offsetTop || 0;
    offsetArray.push({ index: i, offsetheight: offsetTop });
  });

  // Identify unique heights
  offsetArray.forEach((e) => {
    if (!differentHeights.includes(e.offsetheight)) {
      differentHeights.push(e.offsetheight);
    }
  });

  // Adjust each group of elements sharing the same offset height
  differentHeights.forEach((height) => {
    const data = offsetArray.filter(e => e.offsetheight === height);

    // Gather heights and find max
    const getAllHeightArray = data.map((ele) => {
      const element = document.querySelectorAll(selector)[ele.index];
      element.style.minHeight = "";  // Reset inline styles first
      return element.offsetHeight;
    });

    const maxHeight = Math.max(...getAllHeightArray);

    // Apply max height to each element in the group
    data.forEach((ele) => {
      document.querySelectorAll(selector)[ele.index].style.minHeight = `${maxHeight}px`;
    });
  });
};

// Run the function with the selector only on desktop
if (window.innerWidth >= 990) {
  window.setGridHeight('.heading_height');
}

// Optional: Reapply the function on window resize for dynamic responsiveness
window.addEventListener('resize', () => {
  if (window.innerWidth >= 990) {
    window.setGridHeight('.heading_height');
  } else {
    // Reset heights for smaller viewports
    document.querySelectorAll('.heading_height').forEach((element) => {
      element.style.minHeight = "";
    });
  }
});

// Product single page

$(document).ready(function() {
    function updateVariantDisplay() {
        var urlVariant = new URLSearchParams(window.location.search).get('variant');
        $('.variant-images').hide();

        if (urlVariant) {
            $('.variant-images').each(function() {
                var divId = $(this).attr('id');
                if (divId === urlVariant) {
                    $(this).show();
                }
            });
        } else {
            $('.variant-images').first().show();
        }
    }
    updateVariantDisplay();
    $(window).on('popstate', function() {
        updateVariantDisplay();
    });
    setInterval(function() {
        updateVariantDisplay();
    }, 1000);
});