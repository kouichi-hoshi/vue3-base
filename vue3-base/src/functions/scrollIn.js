export { scrollIn as default }

/**
 * 指定した要素をコピーしスクリーン外からスライドインさせる
 *
 * @param {String} el イベント実行対象のhtml要素
 * @param {Object} binding イベントのオプション
 * @param {Number} out イベント対象要素が画面外に隠れるスクロール量
 * @param {Number} scroll bindingでオプションが指定されなかった場合のスクロール検知間隔
 * @param {Number} intervalDef bindingでオプションが指定されなかった場合のスクロール量
 */
function scrollIn(el, binding, out = 100, scroll = 500, interval = 500) {
  const _out = binding.value.out ? binding.value.out : out
  const _scroll = binding.value.scroll ? binding.value.scroll : scroll // イベントを発火させるスクロール量 px
  const _interval = binding.value.interval ? binding.value.interval : interval // スクロール量検知間隔を調整 mm秒

  let i = 0
  let time = null

  function checkScroll() {
    clearTimeout(time)
    time = setTimeout(function () {
      i++
    }, _interval)
    if (window.scrollY > _out) {
      el.classList.add('close')
    } else {
      el.classList.remove('close')
    }
    if (window.scrollY > _scroll) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true })
}
