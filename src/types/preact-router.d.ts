declare module "preact-router" {
    import { JSX, ComponentChildren, FunctionalComponent } from "preact";

    export interface RouterProps {
        children?: ComponentChildren;
    }

    export interface LinkProps extends JSX.HTMLAttributes<HTMLAnchorElement> {
        href: string;
    }

    const Router: FunctionalComponent<RouterProps>;
    export default Router;

    export const Link: (props: LinkProps) => JSX.Element;

    export function route(url: string, replace?: boolean): boolean;
}