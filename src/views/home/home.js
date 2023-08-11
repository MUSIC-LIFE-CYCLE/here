// 등록 버튼 레이아웃
const util = document.querySelector('.util');

// 등록 버튼
const postBtn = document.createElement('button');
postBtn.innerText = '등록';

// 상품 리스트
const contentWrap = document.querySelector('.contentWrap');

rendering();

const param = {
  name: `이름${Math.random()}`,
  description: `상세${Math.random()}`,
  price: `${Math.random()}`,
};

util.appendChild(postBtn).addEventListener('click', function () {
  fetch('http://localhost:8080/product', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(param),
  })
    .then((res) => {
      if (res.ok) {
        window.location.reload();
        console.log('등록 성공', res);
      } else {
        throw new Error('실패');
      }
    })
    .catch((error) => console.error('에러', error));
});

function rendering() {
  draw();
}

async function draw() {
  const re = await axios
    .get('http://localhost:8080/product')
    .then((res) => res)
    .catch((error) => console.error('에러', error));

  if (re.status === 200) {
    contentWrap.innerHTML = re.data
      .map(
        (item, index) =>
          `
        <dl class="content" key=${index} data-id=${item._id}>
            <dt class="title">제목: ${item.name}</dt>
            <dd class="desc">설명: ${item.description}</dd>
            <dd class="price">가격: ${item.price}</dd>
            <dd class="delete"><button type="button">삭제</button></dd>
            <dd class="edit"><button type="button">수정</button></dd>
        </dl>
      `,
      )
      .join('');
  }
  console.log(re, '조회');

  const parentElement = document.querySelector('#contentAll');
  const children = parentElement.children;

  for (const child of children) {
    const contentChild = child.children;
    console.log(child, '자식111', contentChild);
    for (const two of contentChild) {
      console.log(two.className, '자식2222');
      if (two.className === 'delete') {
        two.addEventListener('click', async () => {
          console.log(child.dataset.id, 'id');
          await axios.delete(`http://localhost:8080/product/${child.dataset.id}`);
          rendering();
        });
      }

      two.addEventListener('click', async (e) => {
        const contentList = e.target.closest('.content');

        // const editInputList = `
        //         <div class="inputWrap">
        //             <input type="text" placeholder="제목"/>
        //             <input type="text" placeholder="설명"/>
        //             <input type="text" placeholder="가격"/>
        //             <button type="button" class="save">저장</button>
        //         </div>
        //         `;

        // contentList.innerHTML = editInputList;
        if (two.className === 'edit') {
          location.href = `/edit/${contentList.dataset.id}`;
          console.log('수정', contentList);
        }
      });
    }
  }
}

// function useEffect(effectFunction, cleanupFunction) {
//   effectFunction();

//   return cleanupFunction;
// }

// const myEffect = useEffect(
//   () => {
//     console.log('Effect is running');
//   },
//   () => {
//     console.log('Cleanup is running');
//   },
// );

// myEffect();
