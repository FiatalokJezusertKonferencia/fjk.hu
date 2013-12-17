#= require modernizr
#= require jquery
#= require foundation
#= require jquery.stellar

#= require parallax-slides

$(document).foundation()

$(window).stellar
  horizontalScrolling: false
  positionProperty: 'transform'
  hideDistantElements: false

new ParallaxSlides()

do ->
  anchorsWrapper = $('[data-anchors]')
  return if anchorsWrapper.length == 0

  anchors = anchorsWrapper.find('a')
  selectors = $.makeArray(anchors.map(-> $(this).attr('href').match(/#.*/)[0]))
  targets = $(selectors.join(', '))

  $(window).on 'scroll', ->
    windowScrollTop = $(window).scrollTop()
    scrolltopPlusHeight = windowScrollTop + $(window).height()
    lastDestinationTop = Math.ceil(targets.last().offset().top)

    threshold = -Math.floor($(window).height() / 3)
    active = null

    targets.each ->
      target = $(this)
      id = target.attr('id')
      topOffset = target.offset().top - target.outerHeight(true) - windowScrollTop

      if topOffset <= threshold
        active = target

    if scrolltopPlusHeight >= $(document).height() and lastDestinationTop > windowScrollTop and lastDestinationTop < scrolltopPlusHeight
      active = targets.last()

    anchorsWrapper.find('li').removeClass 'active'
    if active
      anchorsWrapper.find("li:has(a[href$='##{active.attr('id')}'])").addClass('active')
