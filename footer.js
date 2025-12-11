class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .social-icon {
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          color: #3b82f6;
          transform: translateY(-2px);
        }
      </style>
      <footer class="bg-gray-100 py-12 px-4">
        <div class="container mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-6 md:mb-0">
              <div class="flex items-center gap-2 mb-4">
                <i data-feather="cpu" class="text-primary-600"></i>
                <span class="text-xl font-bold text-primary-700">AlgoSphere</span>
              </div>
              <p class="text-gray-600 max-w-md">
                The ultimate resource for mastering algorithms and data structures with interactive examples in C++ and Python.
              </p>
            </div>
            
            <div class="flex flex-col gap-4">
              <h3 class="text-lg font-semibold text-gray-800">Quick Links</h3>
              <div class="flex flex-col gap-2">
                <a href="#algorithms" class="text-gray-600 hover:text-primary-600">Algorithms</a>
                <a href="#data-structures" class="text-gray-600 hover:text-primary-600">Data Structures</a>
                <a href="#pseudocode" class="text-gray-600 hover:text-primary-600">Pseudocode</a>
              </div>
            </div>
            
            <div class="flex flex-col gap-4 mt-6 md:mt-0">
              <h3 class="text-lg font-semibold text-gray-800">Connect</h3>
              <div class="flex gap-4">
                <a href="#" class="social-icon text-gray-600">
                  <i data-feather="github"></i>
                </a>
                <a href="#" class="social-icon text-gray-600">
                  <i data-feather="twitter"></i>
                </a>
                <a href="#" class="social-icon text-gray-600">
                  <i data-feather="linkedin"></i>
                </a>
                <a href="#" class="social-icon text-gray-600">
                  <i data-feather="mail"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
            <p>© ${new Date().getFullYear()} AlgoSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);