export { scrollIn as default }

/**
 * 指定した要素をコピーしスクリーン外からスライドインさせる
 *
 * @param {String} el イベント実行対象のhtml要素
 * @param {Object} binding イベントのオプション
 * @param {Number} scrollDef bindingでオプションが指定されなかった場合のスクロール検知間隔
 * @param {Number} intervalDef bindingでオプションが指定されなかった場合のスクロール量
 */
function scrollIn(el, binding, scrollDef = 500, intervalDef = 500) {
  const interval = binding.value.interval ? binding.value.interval : intervalDef // スクロール量検知間隔を調整 mm秒
  const scroll = binding.value.scroll ? binding.value.scroll : scrollDef // イベントを発火させるスクロール量 px
  const copyTarget = document.querySelector(binding.value.element) // コピーした要素を格納するhtml要素
  let i = 0
  let time = null

  // TODO:対象をコピーする機能を外部化する
  const cloneItem = el.cloneNode(true)
  copyTarget.appendChild(cloneItem)

  function checkScroll() {
    clearTimeout(time)
    time = setTimeout(function () {
      i++
    }, interval)
    if (window.scrollY > scroll) {
      copyTarget.classList.add('active')
    } else {
      copyTarget.classList.remove('active')
    }
  }

  window.addEventListener('scroll', checkScroll, { passive: true })
}
