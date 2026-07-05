/* ====================================
   FIND 5 DIFFERENCES GAME
==================================== */

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:linear-gradient(135deg,#0F4C81,#1976D2);
    color:white;
    text-align:center;
    min-height:100vh;
}

/* ---------- HEADER ---------- */

header{
    padding:25px;
}

h1{
    font-size:40px;
    margin-bottom:10px;
}

.subtitle{
    font-size:20px;
    opacity:.9;
}

/* ---------- SCORE ---------- */

.score-board{
    display:flex;
    justify-content:center;
    gap:30px;
    flex-wrap:wrap;
    margin:25px;
}

.card{
    background:white;
    color:#0F4C81;
    border-radius:15px;
    padding:20px;
    width:170px;
    box-shadow:0 8px 15px rgba(0,0,0,.25);
}

.card h2{
    font-size:20px;
    margin-bottom:10px;
}

.card p{
    font-size:30px;
    font-weight:bold;
}

/* ---------- PROGRESS ---------- */

.progress{
    width:85%;
    max-width:700px;
    height:22px;
    background:#ddd;
    border-radius:30px;
    overflow:hidden;
    margin:20px auto;
}

.progress-fill{
    width:0%;
    height:100%;
    background:#4CAF50;
    transition:.4s;
}

/* ---------- IMAGE ---------- */

.image-container{
    width:90%;
    max-width:1000px;
    margin:auto;
    overflow:hidden;
    border-radius:18px;
    box-shadow:0 8px 18px rgba(0,0,0,.35);
}

.image-container img{
    width:100%;
    display:block;
}

/* ---------- QUESTION ---------- */

.question{
    margin:35px 0 15px;
    font-size:30px;
}

/* ---------- BUTTONS ---------- */

.buttons{
    width:90%;
    max-width:900px;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
    gap:15px;
}

.buttons button{

    padding:18px;

    border:none;

    border-radius:12px;

    cursor:pointer;

    font-size:20px;

    color:white;

    background:#1976D2;

    transition:.25s;

}

.buttons button:hover{

    transform:translateY(-3px);

    background:#0D47A1;

}

/* ---------- CORRECT ---------- */

.correct{

    background:#2E7D32 !important;

}

/* ---------- WRONG ---------- */

.wrong{

    background:#D32F2F !important;

}

/* ---------- MESSAGE ---------- */

#message{

    margin:30px;

    font-size:28px;

    font-weight:bold;

    min-height:40px;

}

/* ---------- CONTROLS ---------- */

.controls{

    margin:30px;

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

}

.controls button{

    padding:15px 30px;

    border:none;

    border-radius:12px;

    cursor:pointer;

    background:#FFC107;

    color:black;

    font-size:20px;

    font-weight:bold;

}

.controls button:hover{

    background:#FFD54F;

}

/* ---------- PLAY AGAIN ---------- */

#playAgain{

    padding:15px 35px;

    border:none;

    border-radius:12px;

    cursor:pointer;

    background:#1976D2;

    color:white;

    font-size:20px;

}

#playAgain:hover{

    background:#0D47A1;

}

/* ---------- POPUP ---------- */

#popup{

    animation:fade .3s;

}

@keyframes fade{

from{

opacity:0;

}

to{

opacity:1;

}

}

/* ---------- RESPONSIVE ---------- */

@media(max-width:768px){

h1{

font-size:30px;

}

.question{

font-size:24px;

}

.card{

width:140px;

}

.card p{

font-size:24px;

}

.buttons{

grid-template-columns:1fr;

}

.buttons button{

font-size:18px;

}

}

@media(max-width:500px){

.score-board{

gap:15px;

}

.card{

width:120px;

padding:15px;

}

.card h2{

font-size:16px;

}

.card p{

font-size:22px;

}

}