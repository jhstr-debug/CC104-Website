document.addEventListener('DOMContentLoaded', function () {

    // Create floating navigation button
    const floatingNav = document.createElement('div');
    floatingNav.className = 'fixed bottom-6 right-6 z-50';
    floatingNav.innerHTML = `
        <div class="relative">
            <button id="floatingMenuBtn" class="w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center">
                <i data-feather="menu" class="w-6 h-6"></i>
            </button>
            <div id="floatingMenu" class="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-2 space-y-2 hidden">
                <a href="#algorithms" class="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 rounded-lg transition whitespace-nowrap">
                    <i data-feather="cpu" class="w-5 h-5 text-primary-600"></i>
                    <span class="text-sm font-medium">10 Essential Algorithms</span>
                </a>
                <a href="#data-structures" class="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 rounded-lg transition whitespace-nowrap">
                    <i data-feather="database" class="w-5 h-5 text-primary-600"></i>
                    <span class="text-sm font-medium">Data Structures</span>
                </a>
                <a href="#pseudocode" class="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 rounded-lg transition whitespace-nowrap">
                    <i data-feather="code" class="w-5 h-5 text-primary-600"></i>
                    <span class="text-sm font-medium">10 Pseudocode Examples</span>
                </a>
            </div>
        </div>
    `;
    document.body.appendChild(floatingNav);

    // Toggle floating menu
    const floatingMenuBtn = document.getElementById('floatingMenuBtn');
    const floatingMenu = document.getElementById('floatingMenu');

    floatingMenuBtn.addEventListener('click', function () {
        floatingMenu.classList.toggle('hidden');

        // Rotate icon when menu is open
        const icon = this.querySelector('i');
        if (floatingMenu.classList.contains('hidden')) {
            this.style.transform = 'rotate(0deg)';
        } else {
            this.style.transform = 'rotate(90deg)';
        }
    });

    // Close menu when clicking a link
    floatingMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            floatingMenu.classList.add('hidden');
            floatingMenuBtn.style.transform = 'rotate(0deg)';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!floatingNav.contains(event.target)) {
            floatingMenu.classList.add('hidden');
            floatingMenuBtn.style.transform = 'rotate(0deg)';
        }
    });

    // Algorithms data
    const algorithms = [
        { name: "Binary Search", description: "Efficient search algorithm for sorted arrays", complexity: "O(log n)" },
        { name: "Bubble Sort", description: "Simple sorting algorithm that repeatedly steps through the list", complexity: "O(n²)" },
        { name: "Merge Sort", description: "Divide and conquer sorting algorithm", complexity: "O(n log n)" },
        { name: "Quick Sort", description: "Efficient sorting algorithm using partitioning", complexity: "O(n log n)" },
        { name: "Dijkstra's Algorithm", description: "Finds the shortest paths between nodes in a graph", complexity: "O((V+E) log V)" },
        { name: "Depth-First Search", description: "Graph traversal algorithm exploring as far as possible", complexity: "O(V + E)" },
        { name: "Breadth-First Search", description: "Graph traversal algorithm exploring neighbor nodes first", complexity: "O(V + E)" },
        { name: "Kruskal's Algorithm", description: "Finds a minimum spanning tree for a weighted graph", complexity: "O(E log V)" },
        { name: "Floyd-Warshall", description: "Finds shortest paths in a weighted graph with positive or negative edge weights", complexity: "O(V³)" },
        { name: "Knapsack Problem", description: "Combinatorial optimization problem", complexity: "O(nW)" }
    ];

    // Pseudocode data
    const pseudocodeExamples = [
        { title: "Linear Search", code: "FOR each item in the list\n    IF item equals target\n        RETURN item's position\nRETURN 'not found'" },
        { title: "Binary Search", code: "SET low to 0\nSET high to list length - 1\nWHILE low ≤ high\n    SET mid to (low + high) / 2\n    IF list[mid] equals target\n        RETURN mid\n    ELSE IF list[mid] < target\n        SET low to mid + 1\n    ELSE\n        SET high to mid - 1\nRETURN 'not found'" },
        { title: "Bubble Sort", code: "REPEAT\n    SET swapped to false\n    FOR i from 1 to list length - 1\n        IF list[i-1] > list[i]\n            SWAP list[i-1] and list[i]\n            SET swapped to true\nUNTIL not swapped" },
        { title: "Insertion Sort", code: "FOR i from 1 to list length - 1\n    SET key to list[i]\n    SET j to i - 1\n    WHILE j ≥ 0 AND list[j] > key\n        SET list[j+1] to list[j]\n        SET j to j - 1\n    SET list[j+1] to key" },
        { title: "Selection Sort", code: "FOR i from 0 to list length - 2\n    SET minIndex to i\n    FOR j from i+1 to list length - 1\n        IF list[j] < list[minIndex]\n            SET minIndex to j\n    IF minIndex ≠ i\n        SWAP list[i] and list[minIndex]" },
        { title: "Merge Sort", code: "IF list length ≤ 1\n    RETURN list\nSET mid to list length / 2\nSET left to MergeSort(list[0..mid-1])\nSET right to MergeSort(list[mid..end])\nRETURN Merge(left, right)" },
        { title: "Quick Sort", code: "IF list length ≤ 1\n    RETURN list\nSELECT pivot from list\nPARTITION list into elements < pivot and ≥ pivot\nRETURN QuickSort(left) + pivot + QuickSort(right)" },
        { title: "Depth-First Search", code: "PROCEDURE DFS(node)\n    MARK node as visited\n    FOR each neighbor of node\n        IF neighbor not visited\n            DFS(neighbor)" },
        { title: "Breadth-First Search", code: "PROCEDURE BFS(start)\n    INITIALIZE queue with start\n    MARK start as visited\n    WHILE queue not empty\n        SET current to queue.dequeue()\n        PROCESS current\n        FOR each neighbor of current\n            IF neighbor not visited\n                MARK neighbor as visited\n                queue.enqueue(neighbor)" },
        { title: "Dijkstra's Algorithm", code: "INITIALIZE distances to infinity\nSET distance[start] to 0\nINITIALIZE priority queue with start\nWHILE queue not empty\n    SET current to queue.extractMin()\n    FOR each neighbor of current\n        SET newDist to distance[current] + edgeWeight\n        IF newDist < distance[neighbor]\n            distance[neighbor] = newDist\n            queue.enqueue(neighbor, newDist)" }
    ];

    // Data Structures examples with visual representations
    const dataStructureExamples = [
        {
            title: "Array - Basic Operations",
            code: "Index:  0   1   2   3   4\nArray: [5] [2] [8] [1] [9]\n\nACCESS: array[2] → 8\nINSERT at index 2: [5][2][7][8][1][9]\nDELETE at index 1: [5][8][1][9]\nSEARCH for 8: Found at index 2"
        },
        {
            title: "Array - Traversal",
            code: "Array: [3, 7, 1, 9, 4]\n\nFOR i from 0 to length-1\n  PRINT array[i]\n\nOutput:\n3 → 7 → 1 → 9 → 4"
        },
        {
            title: "Stack - LIFO Structure",
            code: "       ┌───┐\n       │ 5 │ ← top\n       ├───┤\n       │ 7 │\n       ├───┤\n       │ 3 │\n       └───┘\n\nPush(5): Add to top\nPop(): Remove 5, return it\nPeek(): View 5, don't remove"
        },
        {
            title: "Stack - Infix to Postfix",
            code: "Infix:    A + B * C\nPostfix:  A B C * +\n\nInfix:    (A + B) * C\nPostfix:  A B + C *\n\nInfix:    A + B * C + D\nPostfix:  A B C * + D +"
        },
        {
            title: "Queue - FIFO Structure",
            code: "Front                    Rear\n  ↓                        ↓\n┌───┬───┬───┬───┬───┬───┐\n│ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │\n└───┴───┴───┴───┴───┴───┘\n\nEnqueue(9): Add at rear\nDequeue(): Remove from front (3)"
        },
        {
            title: "Circular Queue",
            code: "       ┌───┬───┬───┬───┐\n       │ 6 │ 7 │ 8 │ 5 │\n       └───┴───┴───┴───┘\n          ↑           ↑\n        Front       Rear\n\nNext Rear = (Rear + 1) % Size\nNext Front = (Front + 1) % Size"
        },
        {
            title: "Priority Queue - Max Heap",
            code: "         50\n        /  \\\n      30    40\n     / \\   /\n   10  20 35\n\nInsert(45):\n         50\n        /  \\\n      45    40\n     / \\   / \\\n   10  30 35  20"
        },
        {
            title: "Binary Tree - Traversals",
            code: "         1\n        / \\\n       2   3\n      / \\ / \\\n     4  5 6  7\n\nInorder:   4 2 5 1 6 3 7\nPreorder:  1 2 4 5 3 6 7\nPostorder: 4 5 2 6 7 3 1\nLevel:     1 2 3 4 5 6 7"
        },
        {
            title: "Binary Search Tree - Insert",
            code: "Insert 15, 10, 20, 8, 12, 17, 25\n\n         15\n        /  \\\n      10    20\n     / \\   / \\\n    8  12 17  25\n\nSearch: O(log n)\nInsert: O(log n)"
        },
        {
            title: "Linked List - Structure",
            code: "Head\n  ↓\n┌───┬──┐  ┌───┬──┐  ┌───┬──┐\n│ 5 │ →│→│ 3 │ →│→│ 8 │ ∅│\n└───┴──┘  └───┴──┘  └───┴──┘\n\nInsert at beginning: O(1)\nInsert at end: O(n)\nDelete node: O(n)"
        }
    ];

    // Populate algorithms
    const algorithmsContainer = document.querySelector('#algorithms .grid');
    algorithms.forEach((algorithm, index) => {
        const card = document.createElement('div');
        card.className = 'algorithm-card bg-white p-6 rounded-xl shadow-md transition duration-300';
        card.innerHTML = `
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
                    <i data-feather="cpu" class="text-primary-600"></i>
                </div>
                <h3 class="text-xl font-semibold">${algorithm.name}</h3>
            </div>
            <p class="text-gray-600 mb-2">${algorithm.description}</p>
            <div class="flex justify-between items-center">
                <span class="px-2 py-1 bg-gray-100 text-sm rounded">${algorithm.complexity}</span>
                <button class="view-code-btn text-primary-600 hover:text-primary-800 font-medium" data-algo="${algorithm.name}">View Code</button>
            </div>
        `;
        algorithmsContainer.appendChild(card);
    });

    // Add click event listeners to View Code buttons
    document.querySelectorAll('.view-code-btn').forEach(button => {
        button.addEventListener('click', function () {
            const algoName = this.getAttribute('data-algo');

            // Scroll to pseudocode section
            const pseudocodeSection = document.querySelector('#pseudocode');
            pseudocodeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Highlight the corresponding pseudocode card
            const pseudocodeCards = document.querySelectorAll('#pseudocode .grid > div');
            pseudocodeCards.forEach(card => {
                const cardTitle = card.querySelector('h3').textContent;
                if (cardTitle === algoName) {
                    // Add highlight effect
                    card.style.transition = 'all 0.3s ease';
                    card.style.border = '2px solid #2563eb';
                    card.style.boxShadow = '0 4px 20px rgba(37, 99, 235, 0.3)';

                    // Remove highlight after 2 seconds
                    setTimeout(() => {
                        card.style.border = '';
                        card.style.boxShadow = '';
                    }, 2000);
                }
            });
        });
    });

    // Populate pseudocode
    const pseudocodeContainer = document.querySelector('#pseudocode .grid');
    pseudocodeExamples.forEach(example => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-md';
        card.innerHTML = `
            <h3 class="text-xl font-semibold mb-3">${example.title}</h3>
            <div class="code-block">
                <pre>${example.code}</pre>
            </div>
        `;
        pseudocodeContainer.appendChild(card);
    });

    // Populate data structures
    const dataStructuresContainer = document.querySelector('#data-structures .grid');
    dataStructureExamples.forEach(example => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-md';
        card.innerHTML = `
            <h3 class="text-xl font-semibold mb-3">${example.title}</h3>
            <div class="code-block">
                <pre>${example.code}</pre>
            </div>
        `;
        dataStructuresContainer.appendChild(card);
    });

    // Initialize feather icons
    feather.replace();
});