export { scroll as default }

/**
 * Custom Directive
 * v-scroll
 *
 * 指定した要素が画面に出入りするタイミングでclassを着脱する
 * このファイルをmain.jsでimportし、下記のように登録する
 * app.directive('scroll', {
 *   beforeMount(el, binding) {
 *     scroll(el, binding.value)
 *   }
 * })
 *
 * テンプレート側では下記のように呼び出す
 * v-scroll="{ threshold: [0.9] }"
 *
 * @param {String} target main.jsでelを受け取る
 * @param {Object} options IntersectionObserverのオプションを指定する　テンプレートで前述のように値を渡す
 *
 */

function scroll(target, options = { threshold: [0.00001] }) {
  const callBack = (entries) => {
    if (entries[0].isIntersecting) {
      target.classList.add('active')
    }
  }
  const observer = new window.IntersectionObserver(callBack, options)
  observer.observe(target)
}
