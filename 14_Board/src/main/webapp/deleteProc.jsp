<%@page import="board.BoardDao"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
	request.setCharacterEncoding("UTF-8");

	int num = Integer.parseInt(request.getParameter("num"));
	String passwd = request.getParameter("passwd");
	
	BoardDao bdao = BoardDao.getInstance();
	
	String msg = "";
	String url = "";
	if(bdao.getPasswd(num).equals(passwd)){
		int cnt = bdao.del(num);
		if(cnt != -1){
			msg = "삭제완료";
			url = "list.jsp";
		}
	}else{
		msg = "비밀번호가 다릅니다.";
		url = "deleteForm.jsp?num="+num;
	}
%>

<script type="text/javascript">
    location.href = "<%=url%>";
</script>
