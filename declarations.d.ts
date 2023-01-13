declare module "*.svg" {
  const ReactComponent: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  const content: string;

  export { ReactComponent };
  export default content;
}
