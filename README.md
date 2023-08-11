문제 설명: 작성하신 자료가 어떤 측면에서 수강생에게 도움이 되는지 문제의 배경 및 의도를 설명합니다.

실습 강의를 통해 쇼핑몰 CRUD - 상품 등록

지시사항: 작성해야 하는 코드가 무엇인지, 어디에 작성해야 하는지 설명합니다. 문제 설명이 없더라도, 지시사항만으로도 충분히 문제를 해결할 수 있어야 합니다.

간단한 쇼핑몰 CRUD 구현하기 - 상품 조회
이번 실습에서 제작하는 Product MVP는 상품 등록, 조회, 수정, 삭제 기능을 구현합니다.

Controller Layer

사용자가 입력한 아래의 제품 정보를 가져옵니다.
name
price
description

가져온 상품 정보를 서비스 층의 addProduct() 서비스에 전달합니다.
이 때 서비스 층은 db에 성공적으로 입력된 유저 정보를 그대로 다시 반환하는데, 이를 response로 프론트 측에 전달합니다.

Sevice Layer

입력된 상품 정보를 db에서 검색한 후, 해당 상품이 등록되어 있을 시, errorMessage를 반환합니다.
상품 id는 uuid4() 함수를 이용하여 유니크 값을 생성해 부여합니다.
이렇게 만들어진 정보들을 모델 층에 전달합니다.

Model Layer

서비스 층으로부터 요청사항을 db를 통해 조회합니다.
이 때 상품 정보를 서비스 층에 그대로 다시 전달합니다.

지시사항
1. 컨트롤러 층의 코드를 작성합니다.
(src/routers/productRouter.js)
2. 서비스 층의 코드를 작성합니다.
(src/routers/productService.js)
3. 모델 층의 코드를 작성합니다.
(src/db/models/productModel.js)

간단한 쇼핑몰 CRUD 구현하기 - 상품 조회
이번 실습에서 제작하는 Product MVP는 상품 등록, 조회, 수정, 삭제 기능을 구현합니다.

Controller Layer

사용자가 등록한 제품 정보를 가져옵니다.

getProduct()를 서비스에 요청합니다.
이 때 서비스 층은 db에 성공적으로 조회된 유저 정보를 그대로 다시 반환하는데, 이를 response로 프론트 측에 전달합니다.

Sevice Layer

모델 층에 요청을 전달합니다. 전달 받은 제품 정보를 controller에 return합니다.

Model Layer

서비스 층으로부터 받은 요청을 통해 db를 조회합니다.
이 때 상품 정보를 서비스 층에 그대로 다시 전달합니다.

지시사항
1. 컨트롤러 층의 코드를 작성합니다.
(src/routers/productRouter.js)
2. 서비스 층의 코드를 작성합니다.
(src/routers/productService.js)
3. 모델 층의 코드를 작성합니다.
(src/db/models/productModel.js)

설명 및 지시사항은 가독성을 고려하여 작성해주시길 바랍니다.
프로젝트 실행 방법을 구체적으로 명시합니다.
테스트 코드를 작성한 경우 테스트를 실행하는 스크립트를 명시합니다.

