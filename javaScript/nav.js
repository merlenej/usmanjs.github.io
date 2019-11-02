var breadcrumb;
switch (new breadcrumb_item().getbreadcrumb_item()) {
  default:
    breadcrumb = "index.html";
    break;
  case 6:
    breadcrumb = "male fitness.html";
    break;
  case 0:
    breadcrumb = "female fitness.html";
}
document.getElementById("demo").innerHTML = breadcrumb;