// Lấy các phần tử cần thiết
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalText = document.getElementById("modalText");
const closeButton = document.querySelector(".close-button");

// Gắn sự kiện click cho từng ảnh
document.querySelectorAll('.grid-item img').forEach((img) => {
    img.addEventListener('click', () => {
        // Hiển thị modal
        modal.style.display = "flex";

        // Thay đổi nội dung modal
        modalImage.src = img.src; // Lấy đường dẫn ảnh
        modalText.textContent = img.alt; // Lấy text từ thuộc tính `alt`
    });
});

// Đóng modal khi nhấn nút "close"
closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});

// Đóng modal khi click ra ngoài modal-content
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
// Thêm animation khi hiển thị modal
modal.addEventListener('transitionend', () => {
    if (modal.style.display === "none") {
        modal.classList.remove('show');
    }
});

document.querySelectorAll('.grid-item img').forEach((img) => {
    img.addEventListener('click', () => {
        // Hiển thị modal với animation
        modal.style.display = "flex";
        setTimeout(() => {
            modal.classList.add('show');
        }, 10); // Delay nhỏ để kích hoạt CSS transition
    });
});

// CSS cần thiết cho animation
const style = document.createElement('style');
style.innerHTML = `
    #imageModal {
        opacity: 0;
        transition: opacity 1.5s ease;
    }
    #imageModal.show {
        opacity: 1;
    }
`;
document.head.appendChild(style);
// Đảm bảo modal có thể được hiển thị nhiều lần với animation
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        modal.classList.remove('show');
    }
});
// Thay đổi font chữ của modalText thành "Special Elite"
modalText.style.fontFamily = "'Special Elite', cursive";

// Thêm link tới Google Fonts cho font "Special Elite"
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);