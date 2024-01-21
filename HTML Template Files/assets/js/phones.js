const iphone_div = document.querySelector(".iphone-phone-container");
const samsung_div = document.querySelector(".samsung-phone-container");
const xiaomi_div = document.querySelector(".xiaomi-phone-container");
const honor_div = document.querySelector(".honor-phone-container");
const google_div = document.querySelector(".google-phone-container");
const oppo_div = document.querySelector(".oppo-phone-container");

const renderPhoneList = (phones, div) => {
  Object.entries(phones).forEach(([key, val]) => {
    const a_tag = document.createElement("a");
    const img_tag = document.createElement("img");
    const name_tag = document.createElement("h3");
    a_tag.setAttribute("class", "phone-card");
    a_tag.setAttribute("id", key);
    a_tag.setAttribute("href", "details.html?phone=" + encodeURIComponent(key));
    img_tag.setAttribute("src", val.img + key.replace(/\s/g, "") + ".png");
    img_tag.setAttribute("alt", key);
    name_tag.innerHTML = key;
    a_tag.appendChild(img_tag);
    a_tag.appendChild(name_tag);
    div.appendChild(a_tag);
  });
};

samsung_div && renderPhoneList(phones.samsung, samsung_div);
xiaomi_div && renderPhoneList(phones.xiaomi, xiaomi_div);
honor_div && renderPhoneList(phones.honor, honor_div);
google_div && renderPhoneList(phones.google, google_div);
oppo_div && renderPhoneList(phones.oppo, oppo_div);
iphone_div && renderPhoneList(phones.iphone, iphone_div);
