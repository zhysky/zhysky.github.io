(function () {
    let template = document.createElement("template");
    template.innerHTML = `
    <style>
    .hy-test{
        color: #2196F3;
        border: 2px solid #806df7;
        border-radius:5px;
        width: 100px;
        height: 50px;
        display: flex;
        justify-content:center;
        align-items: center;
        background: #2bfdc3;
    }
	</style>
    <div class="hy-test">test</div>
    `;
    class HyTest extends HTMLElement {
        constructor() {
            super();
            let shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }
    customElements.define("zhydn-github-github-hytest", HyTest);
})();
