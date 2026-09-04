const CONFIG = {
    // 1. Thông tin màn hình khoá
    sender: `em ❤️`,           // Tên người gửi
    recipient: `Anh iu`,       // Tên người nhận

    // 2. Nội dung thiệp
    title: `To my love`,        // Tiêu đề chính (hiển thị trên vỏ thiệp và popup thư)
    cardCoverDeco: `✿ ❤ ✿`,      // Dòng trang trí nhỏ phía trên tiêu đề
    forYouLine: `Love you so much ❤`, // Dòng chữ hiển thị khi hoa rơi

    // 3. Nội dung bức thư (Mỗi dòng là một đoạn văn)
    popupMessage: `Chúc mừng kỷ niệm 1 năm của chúng mình, anh yêu. ❤️

Cảm ơn anh vì đã đến bên em, yêu thương em và luôn ở cạnh em suốt một năm qua. Có thể mình chưa hoàn hảo, cũng từng có những lúc giận hờn, nhưng em luôn hạnh phúc vì sau tất cả, người nắm tay em vẫn là anh. Hy vọng đây chỉ là năm đầu tiên trong thật nhiều năm sau nữa. Mình sẽ cùng nhau tạo thêm thật nhiều kỷ niệm đẹp, cùng nhau
trưởng thành và mãi yêu nhau như những ngày đầu.

Em yêu anh rất nhiều. ❤️`.split('\n'),

    // 4. Hình ảnh (Lưu ảnh vào thư mục images/ và điền tên file vào đây)
    images: ["./assets/user_images_0.jpg","./assets/user_images_1.jpg","./assets/user_images_2.jpg","./assets/user_images_3.jpg","./assets/user_images_4.jpg"],

    // 5. Ảnh nổi bật hiển thị bên trong bức thư
    popupPhoto: `./assets/user_popupPhoto.jpg`, 

    // 6. Nhạc nền (Link file MP3)
    music: `./assets/user_music.mp3`,
};

