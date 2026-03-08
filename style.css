body {
    margin: 0;
    padding: 0;
    background-color: #E6D2B5; /* Светлый латте */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    height: 100vh;
    overflow: hidden; /* Чтобы не было скролла */
}

/* --- АВАТАРКА --- */
.avatar-container {
    position: absolute;
    top: 40px; /* Отступ сверху */
    left: 50%;
    transform: translateX(-50%); /* Центрирование по горизонтали */
    z-index: 10;
}

.avatar {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #4A3B2A;
    box-shadow: 0 4px 15px rgba(74, 59, 42, 0.3);
    background-color: #fff;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.avatar:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(74, 59, 42, 0.4);
}

/* --- МОДАЛЬНОЕ ОКНО --- */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal.active {
    display: flex;
    opacity: 1;
}

.modal.closing {
    opacity: 0;
    pointer-events: none;
}

.modal-content {
    max-width: 90%;
    max-height: 80%;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 2px solid rgba(255,255,255,0.2);
    animation: zoomIn 0.3s ease forwards; 
}

.modal.closing .modal-content {
    animation: zoomOut 0.3s ease forwards;
}

.close-btn {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.2s;
    z-index: 1001;
}

.close-btn:hover {
    color: #E6D2B5;
}

@keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

@keyframes zoomOut {
    from { transform: scale(1); opacity: 1; }
    to { transform: scale(0.8); opacity: 0; }
}
