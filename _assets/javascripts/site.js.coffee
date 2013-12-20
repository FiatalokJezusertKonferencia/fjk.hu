#= require modernizr
#= require jquery
#= require foundation
#= require jquery.stellar

$(document).foundation()

unless Modernizr.touch
  setStellarOffset = ->
    $('#fjk2014').each ->
      $section = $(this)
      diff = $section.outerHeight() - $section.outerWidth()
      offset = diff < 0 ? diff : 0
      $section.data('stellar-vertical-offset', diff/2 + 50)

  setStellarOffset()
  $(window).on 'resize', setStellarOffset

  $(window).stellar
    horizontalScrolling: false
    responsive: true

do ->
  anchorsWrapper = $('[data-anchors]')
  return if anchorsWrapper.length == 0

  anchors = anchorsWrapper.find('a[href!=#]')
  selectors = $.makeArray(anchors.map(-> $(this).attr('href').match(/#.*/)[0]))
  targets = $(selectors.join(', '))

  $(window).on 'scroll', ->
    windowScrollTop = $(window).scrollTop()
    scrolltopPlusHeight = windowScrollTop + $(window).height()
    lastDestinationTop = Math.ceil(targets.last().offset().top)

    threshold = Math.floor($(window).height() / 3)
    active = null

    targets.each ->
      target = $(this)
      id = target.attr('id')
      topOffset = target.offset().top - windowScrollTop

      if topOffset <= threshold
        active = target

    if scrolltopPlusHeight >= $(document).height() and lastDestinationTop > windowScrollTop and lastDestinationTop < scrolltopPlusHeight
      active = targets.last()

    anchorsWrapper.find('li').removeClass 'active'
    if active
      anchorsWrapper.find("li:has(a[href$='##{active.attr('id')}'])").addClass('active')
