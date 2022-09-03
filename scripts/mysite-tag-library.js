import { MysiteNavbar } from '/scripts/custom-tags/mysite-navbar.js';
import { MysiteFooter } from '/scripts/custom-tags/mysite-footer.js';

const MysiteTags = { MysiteNavbar, MysiteFooter };
let MyassetDomain = 'https://assets-kirans.vercel.app/';

export { MysiteTags };

/* Store a reference to the profile img element */
const profileImage = document.querySelector('img');

profileImage.onclick = () => {
    const profileImgSrc = profileImage.getAttribute('src');
    console.log(profileImgSrc);

    if (profileImgSrc === `${MyassetDomain}images/Kiran-S-profile-pic.jpg`) {
        profileImage.setAttribute('src', `${MyassetDomain}images/Kiran-S-altprofile-pic.jpg`);
    } else {
        profileImage.setAttribute('src', `${MyassetDomain}images/Kiran-S-profile-pic.jpg`);
    }
}
