import Page from "./page";

class CompleteOrderPage extends Page {
    public get orderCompleteTitle() {
        return $('.complete-header')
    }
}

export default new CompleteOrderPage()