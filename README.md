# Simple-Kanban-Board
This HTML code defines the structural layout for a basic Kanban Board application.

Here is a quick breakdown:

Document Setup (<head>): Sets up responsive page metadata and links an external stylesheet (style.css).

Header (<h1>): Displays the main title, "Simple Kanban Board".

Board Layout (<div class="board">): Contains three process columns (.list):

To Do (#list1): Holds two tasks ("Wash Dishes", "Buy Groceries").

In Progress (#list2): Holds one task ("Learn To Code").

Done (#list3): Currently empty.

Drag-and-Drop Attribute: Each task card (.card) includes draggable="true" to enable native mouse dragging.

Script Link (<script>): Loads script.js at the bottom to handle the drag-and-drop interactive logic.
