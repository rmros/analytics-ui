$('.react-bs-table-search-form').find('input').css({'border-radius': '20px'});
$('.react-bs-table-search-form').find('input').css({'background-image': "url('/assets/img/search_icon.png')", 'background-position': 'right', 'background-repeat': 'no-repeat'});

$('#funnel-event-dropdown').text('Select Funnel');

$('.funnel-event-list-item').click(function() {
    $('#funnel-event-dropdown').text($(this).text());
});
$('#segmentation-event-dropdown').text('Select Event');

$('.segmentation-event-list-item').click(function() {
    $('#segmentation-event-dropdown').text($(this).text());
});
$('.date-range-field').click(function() {
    $('.funnel-date-range').toggle();
    $('.funnel-done-btn').toggle();
    $('#funnelChart').toggle();
    $('.date-range-field').toggleClass('blue-border');
});
$('.funnel-done-btn').click(function() {
    $('.funnel-date-range').toggle();
    $('#funnelChart').toggle();
    $('.date-range-field').toggleClass('blue-border');
    $('.funnel-done-btn').toggle();

});
$('.segmentation-date-range-field').click(function() {
    $('.segmentation-date-range').toggle();
    $('.segmentation-done-btn').toggle();
    $('#segmentationChart').toggle();
    $('.segmentation-date-range-field').toggleClass('blue-border');
});
$('.segmentation-done-btn').click(function() {
    $('.segmentation-date-range').toggle();
    $('#segmentationChart').toggle();
    $('.segmentation-date-range-field').toggleClass('blue-border');
    $('.segmentation-done-btn').toggle();

});

$('.segmentation-chart-filter').children().find('.checkbox-design').each(function() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);

    $(this).css("background-color", "#" + randomColor);
});

$('.segmentation-chart-filter-item').click(function() {
    $(this).find('div').toggleClass('white');
})
