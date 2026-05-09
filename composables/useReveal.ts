export const useReveal = () => {
  const observeReveals = () => {
    if (!import.meta.client) return

    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, { threshold: 0.15 })

    elements.forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index * 90, 600)}ms`
      observer.observe(element)
    })
  }

  return { observeReveals }
}
