class PrintTask {
    private String content;

    public PrintTask(String content) {
        this.content = content;
    }

    public String getContent() {
        return content;
    }
}

class PrinterQueue {
    private PrintTask[] tasks;
    private int headIndex;
    private int tailIndex;
    private int queueSize;

    public PrinterQueue(int queueSize) {
        this.queueSize = queueSize;
        tasks = new PrintTask[queueSize];
        headIndex = 0;
        tailIndex = 0;
    }

    public void enqueue(PrintTask task) {                 // Add a print task to the end of the printer queue.
        if ((tailIndex + 1) % queueSize == headIndex) {
            System.out.println("PrinterQueue is full.");
        } else {
            tasks[tailIndex] = task;
            tailIndex = (tailIndex + 1) % queueSize;
        }
    }

    public PrintTask dequeue() {                    
        if (headIndex == tailIndex) {
            System.out.println("PrinterQueue is empty.");
            return null;
        } else {
            PrintTask removedTask = tasks[headIndex];
            headIndex = (headIndex + 1) % queueSize;
            return removedTask;
        }
    }

    public PrintTask peek() {
        if (headIndex == tailIndex) {
            System.out.println("PrinterQueue is empty.");
            return null;
        } else {
            return tasks[headIndex];
        }
    }

    public void clear() {
        headIndex = 0;
        tailIndex = 0;
    }

    public boolean isEmpty() {
        return headIndex == tailIndex;
    }
}