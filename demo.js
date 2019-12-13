$(function() {
    $(".upLeft").click(function() {
        $(".eye img").attr("src", "upLeft.jpg")
    })
    $(".up").click(function() {
        $(".eye img").attr("src", "up.jpg")
    })
    $(".upRight").click(function() {
        $(".eye img").attr("src", "upRight.jpg")
    })
    $(".left").click(function() {
        $(".eye img").attr("src", "left.jpg")
    })
    $(".right").click(function() {
        $(".eye img").attr("src", "right.jpg")
    })
    $(".downLeft").click(function() {
        $(".eye img").attr("src", "downLeft.jpg")
    })
    $(".down").click(function() {
        $(".eye img").attr("src", "down.jpg")
    })
    $(".downRight").click(function() {
        $(".eye img").attr("src", "downRight.jpg")
    })
    $(".center").click(function() {
        $("#1 img").attr("src", "downRight.jpg")
        $("#2 img").attr("src", "upRight.jpg")
        $("#3 img").attr("src", "downLeft.jpg")
        $("#4 img").attr("src", "upLeft.jpg")
    })
})