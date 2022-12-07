// 포트폴리오 스크립트
$(function() {
    var $page=$(".page");
    // console.log("$page");
    // console.log($page);
    var $pageidx = $(".page").index();
    console.log("$pageidx");
    console.log($pageidx);

    for(var pageindex=0; pageindex<$page.length; pageindex++){
        $page.index(pageindex);
        console.log("$page.index(pageindex)");
        console.log($page.index(pageindex));
    }

})