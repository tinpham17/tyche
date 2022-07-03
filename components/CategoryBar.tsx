import { ReactNode } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiFlashlightLine, RiFlashlightFill, RiFireLine, RiFireFill, RiWindyLine, RiWindyFill, RiStarLine, RiStarFill } from 'react-icons/ri'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 10px;
  background: white;
`

const Item = styled.div<{ active: boolean }>`
  padding: 6px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #878A8C;
  &:hover {
    cursor: pointer;
    background: #ededed;
  }
  ${props => props.active && `{
    background: #ededed;
    color: ${props.theme.colors.main};
  }`}
  display: flex;
  align-items: center;
  gap: 4px;
  svg {
    font-size: 18px;
  }
`

interface CategoryBarProps {}

const CategoryBar: React.FC<CategoryBarProps> = (props) => {
  const items: {
    key: string
    label: string
    icon: ReactNode
    activeIcon: ReactNode
  }[] = [
    {
      key: 'best',
      label: 'Best',
      icon: <RiFlashlightLine/>,
      activeIcon: <RiFlashlightFill/>
    },
    {
      key: 'hot',
      label: 'Hot',
      icon: <RiFireLine/>,
      activeIcon: <RiFireFill/>
    },
    {
      key: 'new',
      label: 'New',
      icon: <RiWindyLine/>,
      activeIcon: <RiWindyFill/>
    },
    {
      key: 'top',
      label: 'Top',
      icon: <RiStarLine/>,
      activeIcon: <RiStarFill/>
    }
  ]

  const { query } = useRouter()

  return (
    <Wrapper>
      {items.map((item) => (
        <Link
          key={item.key}
          href={`/${item.key}`}
        >
          <a>
            <Item
              active={item.key === query.category}
            >
              {item.key === query.category ? item.activeIcon : item.icon}
              {item.label}
            </Item>
          </a>
        </Link>
      ))}
    </Wrapper>
  )
}

export default CategoryBar
