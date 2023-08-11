
# 문제 설명

ppt 강의에서 코드를 보며 간단한 API를 예습했다. 이번 간단한 쇼핑몰 CRUD 구현을 통해 실전 프로젝트를 경험해 볼 수 있다.

# 실습 문제 1
# 간단한 쇼핑몰 CRUD 구현하기 - 상품 등록

## 이번 실습에서 제작하는 Product MVP는 상품 등록, 조회, 수정, 삭제 기능을 구현합니다.

### Controller Layer

+ 사용자가 입력한 아래의 제품 정보를 가져옵니다.
    + `name`
    + `price`
    + `description`

가져온 상품 정보를 서비스 층의 addProduct() 서비스에 전달합니다.
이 때 서비스 층은 db에 성공적으로 입력된 유저 정보를 그대로 다시 반환하는데, 이를 response로 프론트 측에 전달합니다.

### Sevice Layer 

입력된 상품 정보를 db에서 검색한 후, 해당 상품이 등록되어 있을 시, errorMessage를 반환합니다.
상품 id는 uuid4() 함수를 이용하여 유니크 값을 생성해 부여합니다.
이렇게 만들어진 정보들을 모델 층에 전달합니다.

### Model Layer

서비스 층으로부터 요청사항을 db를 통해 조회합니다.
이 때 상품 정보를 서비스 층에 그대로 다시 전달합니다.

## 지시사항
```
1. 컨트롤러 층의 코드를 작성합니다.
(src/routers/productRouter.js)
2. 서비스 층의 코드를 작성합니다.
(src/routers/productService.js)
3. 모델 층의 코드를 작성합니다.
(src/db/models/productModel.js)
```

# 실습 문제 2

# 간단한 쇼핑몰 CRUD 구현하기 - 상품 수정

## 이번 실습에서 제작하는 Product MVP는 상품 등록, 조회, 수정, 삭제 기능을 구현합니다.

### Controller Layer

+ 사용자가 수정한 상품 정보를 가져옵니다.
    + `_id`
    + `name`
    + `price`
    + `description`

가져온 수정 정보를 서비스 층의 patchProduct() 서비스에 전달합니다.
이 때 서비스 층은 db에 성공적으로 수정된 제품 정보를 그대로 다시 반환하는데, 이를 response로 프론트 측에 전달합니다.

### Sevice Layer

상품 수정 정보에 오류가 있을 시에 errorMessage를 반환합니다.
이렇게 만들어진 정보들을 모델 층에 전달합니다.

### Model Layer

서비스 층으로부터 받은 요청을 통해 db에 저장합니다.
이 때 수정된 상품 정보를 서비스 층에 그대로 다시 전달합니다.

## 지시사항
```
1. 컨트롤러 층의 코드를 작성합니다.
(src/routers/productRouter.js)
2. 서비스 층의 코드를 작성합니다.
(src/routers/productService.js)
3. 모델 층의 코드를 작성합니다.
(src/db/models/productModel.js)
```

# 실습 문제 3
# 간단한 쇼핑몰 CRUD 구현하기 - 상품 조회

## 이번 실습에서 제작하는 Product MVP는 상품 등록, 조회, 수정, 삭제 기능을 구현합니다.

### Controller Layer

getProduct()를 서비스에 요청합니다.
이 때 서비스 층은 db에 성공적으로 조회된 유저 정보를 그대로 다시 반환하는데, 이를 response로 프론트 측에 전달합니다.

### Sevice Layer

모델 층에 요청을 전달합니다. 전달 받은 제품 정보를 controller에 return합니다.

### Model Layer

서비스 층으로부터 받은 요청을 통해 db를 조회합니다.
이 때 상품 정보를 서비스 층에 그대로 다시 전달합니다.

## 지시사항
```
1. 컨트롤러 층의 코드를 작성합니다.
(src/routers/productRouter.js)
2. 서비스 층의 코드를 작성합니다.
(src/routers/productService.js)
3. 모델 층의 코드를 작성합니다.
(src/db/models/productModel.js)
```

# 실습 문제 4

## 간단한 쇼핑몰 CRUD 구현하기 - 상품 삭제

이번 실습에서 제작하는 Product MVP는 상품 등록, 조회, 수정, 삭제 기능을 구현합니다.

### Controller Layer

삭제할 상품의 _id를 가져옵니다.
deleteProduct()를 서비스에 요청합니다.
이 때 서비스 층은 db에 성공적으로 삭제 시 성공 여부를 response로 프론트 측에 전달합니다.

### Sevice Layer

모델 층에 요청을 전달합니다. 성공 여부를 controller에 return합니다.

### Model Layer

서비스 층으로부터 받은 요청을 통해 db에서 제품을 삭제합니다.
이 때 삭제 성공 여부를 서비스 층에 그대로 다시 전달합니다.

## 지시사항
```
1. 컨트롤러 층의 코드를 작성합니다.
(src/routers/productRouter.js)
2. 서비스 층의 코드를 작성합니다.
(src/routers/productService.js)
3. 모델 층의 코드를 작성합니다.
(src/db/models/productModel.js)
```

설명 및 지시사항은 가독성을 고려하여 작성해주시길 바랍니다.
프로젝트 실행 방법을 구체적으로 명시합니다.

env 파일 최상단 폴더에 작성
npm i 실행


테스트 코드를 작성한 경우 테스트를 실행하는 스크립트를 명시합니다.

