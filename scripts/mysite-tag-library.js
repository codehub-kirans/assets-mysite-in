import { MysiteNavbar } from '/scripts/custom-tags/mysite-navbar.js';
import { MysiteFooter } from '/scripts/custom-tags/mysite-footer.js';

const MysiteTags = { MysiteNavbar, MysiteFooter };

export { MysiteTags };

/* Store a reference to the profile img element */
const profileImage = document.querySelector('img');

profileImage.onclick = () => {
    const profileImgSrc = profileImage.getAttribute('src');

    if (profileImgSrc === 'images/Kiran-S-profile-pic.jpg') {
        profileImage.setAttribute('src', 'images/Kiran-S-altprofile-pic.jpg');
    } else {
        profileImage.setAttribute('src', 'images/Kiran-S-profile-pic.jpg');
    }
}
