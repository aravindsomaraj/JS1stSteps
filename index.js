let hscoreEl = document.getElementById("hs")
let gscoreEl = document.getElementById("gs")

// let hscore = hscoreEl.textContent
// let gscore = gscoreEl.textContent


let hscore = 0
let gscore = 0
function reset()
{
    hscore = 0
    gscore = 0
    hscoreEl.textContent = 0
    gscoreEl.textContent = 0
}
function h(val)
{
    hscore += val
    hscoreEl.textContent = hscore
}
function g(val)
{
    gscore += val
    gscoreEl.textContent = gscore
}