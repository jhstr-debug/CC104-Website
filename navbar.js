class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .nav-link {
          transition: all 0.3s ease;
          position: relative;
        }
        .nav-link:hover {
          color: #3b82f6;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #3b82f6;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      </style>
      <nav class="bg-white shadow-md">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="index.html" class="flex items-center gap-2">
            <i data-feather="cpu" class="text-primary-600"></i>
            <span class="text-xl font-bold text-primary-700">AlgoSphere</span>
          </a>
          
          <div class="hidden md:flex gap-8">
            <a href="#algorithms" class="nav-link text-gray-700">Algorithms</a>
            <a href="#data-structures" class="nav-link text-gray-700">Data Structures</a>
            <a href="#pseudocode" class="nav-link text-gray-700">Pseudocode</a>
          </div>
          
          <button class="md:hidden">
            <i data-feather="menu"></i>
          </button>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);