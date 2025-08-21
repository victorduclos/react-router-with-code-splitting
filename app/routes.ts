import {type RouteConfig, index, route, prefix} from "@react-router/dev/routes";

export default [
    index("./routes/home.tsx"),
    route("/about", "./routes/about.tsx"),
    route("/contact", "./routes/contact.tsx"),
    ...prefix("/products", [
        index("./routes/products/list.tsx"),
        route(":id", "./routes/products/$id.tsx"),
    ]),
    route("/services", "./routes/services.tsx"),
] satisfies RouteConfig;
