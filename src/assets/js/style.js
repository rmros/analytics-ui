$('.react-bs-table-search-form').find('input').css({'border-radius': '20px'});
$('.react-bs-table-search-form').find('input').css({'background-image': "url('/assets/img/search_icon.png')", 'background-position': 'right', 'background-repeat': 'no-repeat'});

$('#funnel-event-dropdown').text('Select Funnel');

$('.funnel-event-list-item').click(function() {
    $('#funnel-event-dropdown').text($(this).text());
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
    $('.segmentation-chart-filter').toggle();
    $('.segmentation-date-range-field').toggleClass('blue-border');
});
$('.segmentation-done-btn').click(function() {
    $('.segmentation-date-range').toggle();
    $('#segmentationChart').toggle();
    $('.segmentation-chart-filter').toggle();
    $('.segmentation-date-range-field').toggleClass('blue-border');
    $('.segmentation-done-btn').toggle();

});

$('.segmentation-compare-icon').click(function() {
    $('.compare-filter-list').toggleClass('inline');
    $(this).toggle();
})

// $('.segmentation-details-or-label').click(() => {
//     $('.segmentation-details-and-label').css('background', 'white');
//     $('.segmentation-details-or-label').css('background', '#d8e0e6');
//
// })
//
// $('.segmentation-details-and-label').click(() => {
//     $('.segmentation-details-or-label').css('background', 'white');
//     $('.segmentation-details-and-label').css('background', '#d8e0e6');
//
// })
