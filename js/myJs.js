var colour = [
    "rgb(142, 68, 173)",
    "rgb(243, 156, 18)",
    "rgb(211, 84, 0)",
    "rgb(0, 106, 63)",
    "rgb(41, 128, 185)",
    "rgb(192, 57, 43)",
    "rgb(135, 0, 0)",
    "rgb(39, 174, 96)"
];

$(".brick").each(function() {
    console.log($(".brick"));
    this.style.backgroundColor =  colour[colour.length * Math.random() << 0];
});

$(function() {
    var wall = new freewall("#freewall");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 160,
        cellH: 160,
        delay: 50,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    var temp = '<div class="brick {size}" style="background-color: {color}"><div class="cover"></div></div>';
    var size = "size33 size32 size31 size23 size22 size21 size13 size12 size11".split(" ");
    $(".add-more").click(function() {
        var html = "";
        for (var i = 0; i < 1; ++i) {
            html += temp.replace('{size}', size[size.length * Math.random() << 0])
                        .replace('{color}', colour[colour.length * Math.random() << 0]);
        }
        console.log(wall);
        wall.appendBlock(html);
    });
});