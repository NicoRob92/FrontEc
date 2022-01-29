import { Switch, Route } from "react-router-dom";
import AdminButtonLink from "../../components/AdminButtonLink/AdminButtonLink";
import styles from "./Admin.module.scss"
import DashBoard from "../../Views/AdminViews/DashBoard/DashBoard";
import AdminCategory from "../../Views/AdminViews/CreateCategory/AdminCategory";

export default function Admin (){

    return(
        <div className={styles.container}>
            <aside>
                <AdminButtonLink
                text="DASHBOARD"
                to="/admin"
                />
                <AdminButtonLink
                text="Administrar categorías"
                to="/admin/category"
                />
            </aside>
            <div>

                <Switch>
                <Route path="/admin/category">
                        <AdminCategory/>
                    </Route>
                    <Route path="/">
                        <DashBoard/>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}